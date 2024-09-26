

function Home(proops) {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl rounded-none">
  <figure>
    <img
      src={proops.imgg}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{proops.name}</h2>
    <p>{proops.parg}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary rounded-full ">{proops.btn}</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
