import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoId?: string;
}

const getEmbedUrl = (videoId: string): string => {
  return `https://www.youtube.com/watch?v=${videoId}`;
};

export const VideoPopup = ({
  isOpen,
  onClose,
  title,
  videoId = "EGO5m_DBzF8",
}: VideoPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-2xl">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-lg"
            src={getEmbedUrl(videoId)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
