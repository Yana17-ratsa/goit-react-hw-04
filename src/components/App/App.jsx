// import { css } from "./App.module.css";
import { useEffect, useState } from "react";
// import { Toaster } from 'react-hot-toast';
import { getImageGallery } from "../../imageGallery-api"
import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
function App () {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [totalPages, setTotalPages] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState("");
    const [modalImageAlt, setModalImageAlt] = useState("");
  

    useEffect(() => {
        if (!searchQuery) return;

        async function fetchImageGallery () {
            try {
                setIsLoading(true);
                setIsError(false);
    
                const { results,  total_pages} = await getImageGallery(searchQuery, page);

                setTotalPages(total_pages);
                setImages((prevState) => [...prevState, ...results]);
                console.log(total_pages);
            }
            catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchImageGallery();
        }, 
    [page, searchQuery]);



const handleSearch = async (topic) => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
}


const handleLoadMore = async () => {
    setPage(page + 1);
}

const openModal = (imgUrl, alt) => {
    setModalIsOpen(true);
    setModalImageSrc(imgUrl);
    setModalImageAlt(alt);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImageSrc("");
    setModalImageAlt("");
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)"
    }
  };


    return (
    <>
        <SearchBar onSearch={handleSearch}/>
        {isLoading && <p>Loading images, please wait..</p>}
        {isError && <p>There is an error! Please try again!</p>}
        {/* {images.lenght > 0 && <ImageGallery gallery={images}/>} */}
        <ImageGallery gallery={images} onOpenModal={openModal}/>
        {page < totalPages && images.length > 0 && !isLoading && <button type="button" onClick={handleLoadMore}>Load more</button>}
        {isLoading && <Loader/>}
        <ImageModal
        onOpen={modalIsOpen}
        onClose={closeModal}
        style={customStyles}
        modalImageUrl={modalImageSrc}
        modalImageAlt={modalImageAlt}
      />
    </>
    )
}

export default App
