import TextInput from "../components/TextInput";

function Page() {
  return (
    <div className="flex-1 drop-shadow w-1/2 max-w-[50%] bg-white rounded flex-end py-1 px-2">
      <p>Page</p>
      <TextInput
        type="text"
        placeholder="Email Address"
      />
      <TextInput
        type="password"
        placeholder="Password"
      />
    </div>
  );
}

export default Page;
