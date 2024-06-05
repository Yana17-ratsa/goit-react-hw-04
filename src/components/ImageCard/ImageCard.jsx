const ImageCard = ({ galleryItemData, onOpenModal }) => {
    return (
        <div>
             <img  onClick={() =>
          onOpenModal(galleryItemData.urls.regular, galleryItemData.description)
        }src={galleryItemData.urls.small} alt={galleryItemData.description} />
        </div>
    )
}

export default ImageCard