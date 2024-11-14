import {useRef, useState} from "react";

function ItemDetails() {

    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + button");
    const closeButton = document.querySelector("dialog button");

    const dialogRef = useRef(null); // Reference to the dialog element
    const [isDialogOpen, setIsDialogOpen] = useState(false); // State to manage dialog visibility

    // Function to show the dialog
    const showDialog = () => {
        setIsDialogOpen(true);
        dialogRef.current?.showModal();
    };

    // Function to close the dialog
    const closeDialog = () => {
        setIsDialogOpen(false);
        dialogRef.current?.close();
    };
    return (
        <div>
            <dialog style={{width: "100%"}} ref={dialogRef}>
                <p>This is a dialog!</p>
                <button onClick={closeDialog}>X</button>
            </dialog>
            <button onClick={showDialog}>Show the dialog</button>
        </div>
    );
}

export default ItemDetails;