import { v4 as uuidv4 } from "uuid";

export default function ErrorMessages({ errors }){
    return (
      <div className="w-full mt-2 p-2 border">
        {errors.map((error) => (
          <li key={uuidv4()} className="text-red-500">
            {error}
          </li>
        ))}
      </div>
    );
  };