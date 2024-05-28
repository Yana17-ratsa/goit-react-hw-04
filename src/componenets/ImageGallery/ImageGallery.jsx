import ImageCard from "./ImageCard"

const ImageGallery = ({ gallery, onOpenModal }) => {
    return (
    <ul>
	{gallery.map((galleryItem) => (
    <li key={galleryItem.id}>
		<div>
			<ImageCard galleryItemData={galleryItem} onOpenModal={onOpenModal}/>
		</div>
	</li>))}
    </ul>
    )
}

export default ImageGallery