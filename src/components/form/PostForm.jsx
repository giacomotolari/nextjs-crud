"use client";
import React, { useMemo, useReducer } from "react";
import { useRouter } from "next/navigation";
import ErrorMessages from "./ErrorMessages";
import SendConfirmation from "./SendConfirmation";
import createPost from "../../lib/CRUD/createPost";
import editPost from "../../lib/CRUD/editPost";
import formAction from "../../lib/formAction";

const initialState = {
  title: "",
  text: "",
  errors: [],
  sendConfirm: null,
  isLoading: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_TEXT":
      return { ...state, text: action.payload };
    case "SET_ERRORS":
      return { ...state, errors: action.payload };
    case "SET_SEND_CONFIRM":
      return { ...state, sendConfirm: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const resetErrors = (dispatch) => dispatch({ type: "SET_ERRORS", payload: [] });

export default function PostForm({
  action,
  postToEdit = undefined,
  setIsEditing = undefined,
}) {
  const [state, dispatch] = useReducer(formReducer, {
    // if postToEdit is defined, set the form with the post's data to have it ready to edit
    title: postToEdit ? postToEdit.title : "",
    text: postToEdit ? postToEdit.text : "",
    errors: [],
    sendConfirm: null,
    isLoading: false,
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetErrors(dispatch);

    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const response =
        action === formAction.create
          ? await createPost(state)
          : await editPost(postToEdit._id, state);

      const errorMessages = response.msg;
      if (errorMessages) {
        dispatch({ type: "SET_ERRORS", payload: errorMessages });
        dispatch({ type: "SET_SEND_CONFIRM", payload: null });
      } else {
        resetErrors(dispatch);
        dispatch({
          type: "SET_SEND_CONFIRM",
          payload: "Post sent successfully!",
        });

        setTimeout(() => {
          dispatch({ type: "RESET_FORM" });
          // refresh the page to show the updated posts list
          router.refresh();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
      if (setIsEditing !== undefined) {
        setIsEditing(false);
      }
    }
  };

  const wrongInput = useMemo(() => {
    const errorsToOneString = state.errors.join(" ");
    const errorsStringLowercase = errorsToOneString.toLowerCase();
    const titleError = errorsStringLowercase.includes("title");
    const textError = errorsStringLowercase.includes("text");
    return { titleError, textError };
  }, [state.errors]);

  return (
    <>
      <form onSubmit={handleSubmit} className="py-4 flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            className={`shadow-md px-6 py-2 border ${
              wrongInput.titleError ? "border-red-500" : "border-slate-300"
            }`}
            type="text"
            id="form-title"
            placeholder="title"
            value={state.title}
            onChange={(e) =>
              dispatch({ type: "SET_TITLE", payload: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="text">Text</label>
          <textarea
            className={`h-32 shadow-md px-6 py-2 border ${
              wrongInput.textError ? "border-red-500" : "border-slate-300"
            }`}
            id="form-text"
            placeholder="Type your text here"
            value={state.text}
            onChange={(e) =>
              dispatch({ type: "SET_TEXT", payload: e.target.value })
            }
          />
        </div>
        <button
          className="w-full mt-4 p-3 border border-slate-400 bg-green-700 text-white font-bold hover:bg-green-500"
          type="submit"
          disabled={state.isLoading}
        >
          {action}
        </button>

        {state.errors.length > 0 && <ErrorMessages errors={state.errors} />}

        {state.sendConfirm && <SendConfirmation message={state.sendConfirm} />}

        {state.isLoading && "Loading..."}
      </form>
    </>
  );
}
