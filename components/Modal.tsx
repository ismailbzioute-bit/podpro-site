
import React from 'react';

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"></div>
      
      <div 
        className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" />
          </svg>
        </button>
        
        <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
          <div className="flex-1 bg-slate-100 flex items-center justify-center overflow-hidden">
            <img 
              src={imageUrl} 
              alt="Expanded Mockup" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="w-full lg:w-80 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Detailed View</h3>
                <p className="text-slate-500 text-sm">Professional 4K render for your store listings.</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Material</span>
                  <span className="font-bold">Premium Cotton</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Availability</span>
                  <span className="font-bold text-green-600">In Stock</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Global Shipping</span>
                  <span className="font-bold">4-7 Days</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all mt-8">
              Customize Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
