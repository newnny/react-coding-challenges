import { useState, useEffect } from "react";
import { RandomData } from "../components/utils"
import ExplainImg from "../assets/scroll_height.png"

interface ScrollToTopProps {
  theme: string | null;
}
const ScrollToTop: React.FC<ScrollToTopProps> = ({ theme }) => {
  const [reachBottom, setReachBottom] = useState<boolean>(false)

  const toggleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = document.documentElement.scrollTop;
      const innerHeight = window.innerHeight
      const hasReachedBottom = scrollHeight - (scrollTop + innerHeight) <= 20
      setReachBottom(hasReachedBottom)
    };

    // Attach scroll event listener
    //Whenever the user scrolls, the handleScroll function will be called.
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])


  return (
    <div>
      <div>
        <h3>Understanding the concept</h3>
        <img style={{ width: window.innerWidth * 0.7 }} src={ExplainImg} alt='scroll_height' />
        <p>
          <b>offsetHeight</b> = document.documentElement.offsetHeight<br />
          total height of an element including scroll
          <br /><br />
          <b>innerHeight</b> = window.innerHeight<br />
          height of the viewport; the visible area of the browser window where the web content is displayed.
          <br /><br />
          <b>clientHeight</b> = document.documentElement.clientHeight<br />
          height of only the visible portion of the content
          <br /><br />
          <b>scrollHeight</b> = document.documentElement.scrollHeight<br />
          total height of entire content of element
          <br /><br />
          <b>scrollTop</b> = document.documentElement.scrollTop<br />
          how far from the top position = how much scrolled

        </p>
      </div>
      <hr />
      <div>
        <h3>Example</h3>
        <p>Goal: Show a 'scroll top' button when a user scroll all the way down.</p>
        <hr style={{borderTop: '1px dashed grey', }}/>
        {RandomData.map(d =>
          <div key={d.id}>
            <p>
              {`Name: ${d.first_name} ${d.last_name}`}<br />
              {`Email: ${d.email}`}
            </p>
          </div>
        )}
      </div>
      {reachBottom &&
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: 'sticky',
            bottom: 0,
            width: '100vw'
          }}
        >
          <button
            style={{
              border: "none",
              borderRadius: "50%",
              padding: "30px 15px",
              marginRight: 30,
              background: theme == 'dark' ? '#f0edcc' : '#02343f',
              color: theme == 'dark' ? '#02343f' : '#f0edcc',
              cursor: 'pointer'
            }}
            onClick={toggleScrollUp}>
            Scroll up
          </button>
        </div>
      }
    </div>
  )

}

export default ScrollToTop