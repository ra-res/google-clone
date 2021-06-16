import { MicrophoneIcon } from "@heroicons/react/solid";

function VoiceInput({ classAttr }) {
  // TODO: Add Voice Recognition Functionality
  return (
    <div>
      <MicrophoneIcon className={`${classAttr}`} />
    </div>
  );
}

export default VoiceInput;
