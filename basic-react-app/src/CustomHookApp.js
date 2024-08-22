import { useOnlineStatus } from "./useOnlineStatus.js";

function SaveButton() {
  const isOnline = useOnlineStatus(false);

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}

function StatusBar() {
  const isOnline = useOnlineStatus(false);
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

export default function CustomeHookApp() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}
