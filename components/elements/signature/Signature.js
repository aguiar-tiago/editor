export const Signature = ({blockProps}) => {

    return (
        <button 
            type="button" 
            className="
                flex max-w-sm 
                bg-gradient-to-r
                from-indigo-500 
                via-pink-500 
                to-yellow-500 
                hover:from-indigo-600 
                hover:via-pink-600 
                hover:to-red-600 
                focus:outline-none
                text-white 
                text-2xl
                uppercase 
                font-bold
                shadow-md
                p-5">
                <div className="flex sm:flex-cols-12 gap-6">
                    <div className="col-span-1">🖊️</div>
                    <div className="col-span-2 pt-1.5">signature</div>
                </div> 
        </button>
    );
  }