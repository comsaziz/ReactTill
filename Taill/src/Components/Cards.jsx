function Cards() {
    return (
      <div className="flex justify-center space-x-12 mt-20 w-full max-sm:flex-col max-sm:space-x-0 max-sm:mt-10">
        <div className="carousel w-[25%] max-sm:w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.pinimg.com/236x/fa/0c/56/fa0c566980e3c23dd12fa776dbcaac85.jpg"
              className="w-full"
            />
            <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle bg-[#e4e4e4]">❮</a>
              <a href="#slide2" className="btn btn-circle bg-[#e4e4e4]">❯</a>
            </div>
          </div>
        </div>
  
        <div className="bg-base-100 w-[30%] max-sm:w-full max-sm:mt-5">
          <img
            src="https://i.pinimg.com/236x/94/b4/90/94b490c160430acb967f016fb290c368.jpg"
            alt="Shoes"
            className="rounded-xl w-full gap-9"
          />
        </div>
      </div>
    );
  }
  
  export default Cards;
  