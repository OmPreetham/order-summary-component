const OrderSummary = () => {
  return (
    <section>
      <div className="hero-container">
        <img
          className="hero-illustration"
          src="/images/illustration-hero.svg"
          alt="Hero Illustration"
        />
      </div>
      <div className="order-container">
        <div className="summary-container">
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <div className="plans-container">
          <div className="plans-details-container">
            <div className="music-icon-container">
              <img
                className="music-icon"
                src="/images/icon-music.svg"
                alt="Music Icon SVG"
              />
            </div>
            <div className="plan-cost-container">
              <p className="annual-plan">Annual Plan</p>
              <p className="plan-cost">$59.99/year</p>
            </div>
          </div>
          <div className="change-container">
            <a className="change" href="#">
              Change
            </a>
          </div>
        </div>
        <div className="payment-container">
          <button>Proceed to Payment</button>
          <a className="cancel" href="#">
            Cancel Order
          </a>
        </div>
      </div>
    </section>
  )
}
export default OrderSummary
