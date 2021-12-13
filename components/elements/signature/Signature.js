export const Signature = ({blockProps}) => {

    return (
        <button 
            type="button" 
            className="
                flex
                bg-black
                focus:outline-none
                text-white
                text-sm
                uppercase
                font-bold
                shadow-md
                rounded-sm
                p-2">
                <div className="flex sm:flex-cols-12 gap-6">
                    <div className="col-span-1">🖊️</div>
                    <div className="col-span-2">signature</div>
                </div> 
        </button>
    );
  }