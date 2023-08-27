/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
function Cart() {
  return (
    <div className='cartitems'>
      <div className='pic' >
        <img src="./images/pic1.png" alt="pic" />
      </div>
      <div className='div2'>
        <span>
          <img src="./images/star.png" alt="start" className='star' />
          <p>5.0</p>
        </span>
        <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
        <p><b>From $1256</b> / Person</p>
      </div>
    </div>
  )
}

ReactDOM.render(<Cart />, document.getElementById("root"))