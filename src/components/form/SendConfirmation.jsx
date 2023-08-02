export default function SendConfirmation({ message }) {
  return (
    <div className="w-full mt-2 p-2 border">
      <p className="text-green-500">{message}</p>
    </div>
  );
}
