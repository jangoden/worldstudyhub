import { createPortal } from "react-dom";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & (
  | {
      channel: "youtube";
      videoId: string;
    }
  | {
      channel?: "custom";
      src: string;
    }
);

export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
  if (!isOpen) return null;

  let src = "";

  if (props.channel === "youtube") {
    src = `https://www.youtube.com/embed/${props.videoId}?autoplay=1`;
  } else {
    src = props.src;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full max-w-2xl">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-3xl leading-none text-black"
        >
          <span className="sr-only">Close modal</span>
          &times;
        </button>
        <div className="relative aspect-video">
          {/* This overlay prevents clicks from going to the YouTube link */}
          <div className="absolute inset-0"></div>
          <iframe
            className="absolute top-0 left-0 h-full w-full"
            src={src}
            allowFullScreen
            allow="autoplay"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
