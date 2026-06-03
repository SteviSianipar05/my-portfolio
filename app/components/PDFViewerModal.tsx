"use client";

interface PDFViewerModalProps {
  file: string;
  onClose: () => void;
}

export function PDFViewerModal({ file, onClose }: PDFViewerModalProps) {
  if (!file) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl h-[80vh] overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-lg text-sm shadow-md hover:bg-red-600 transition"
        >
          Close
        </button>
        <iframe src={file} className="w-full h-full rounded-xl" />
      </div>
    </div>
  );
}
