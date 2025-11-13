const Cardcontent = ({ data }) => {
  console.log(data); // ab yahan array milega
  return (
    <>
      {data.map((ele, ind) => (
        <div key={ind} className="card-content-parent">
          <div className="card-content-info">
            <h5 className="card-content-heading">{ele.heading}</h5>
            <p className="card-content-para">{ele.para}</p>
          </div>

          <img src={ele.image} alt="img" />

          <div className="card-content-bu">
            <i className="ri-arrow-right-long-line"></i>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cardcontent;
