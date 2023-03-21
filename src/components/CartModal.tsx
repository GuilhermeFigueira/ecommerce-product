import * as Dialog from "@radix-ui/react-dialog";

export default function CartModal() {
	return (
		<Dialog.Portal>
			<Dialog.Overlay className="inset-0 fixed z-30 ">
				<Dialog.Content className="fixed bg-white text-blue-very_dark top-[13%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/40 w-[95%]">
					<Dialog.Title className="text-sm font-black p-4">
						Cart
					</Dialog.Title>
					<div className="border-t-2">
						<div className="p-4"></div>
					</div>
				</Dialog.Content>
			</Dialog.Overlay>
		</Dialog.Portal>
	);
}
