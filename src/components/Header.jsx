import styles from "./Header.module.css";

function Header({ isYesClicked }) {
  return (
    <>
      <div>
        {/* {isYesClicked ? (
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/"
            alt="bears kissing"
          ></img>
        ) : (
          <img
            src="https://gifdb.com/images/high/cute-happy-excited-running-bear-22ddmgfv5pxaoj3t.webp"
            alt="bears"
          />
        )} */}
        <img
          className={`${styles.header_image} ${
            isYesClicked ? styles.fade_in : styles.fade_out
          }`}
          src={
            isYesClicked
              ? "https://media.tenor.com/gUiu1zyxfzYAAAAi/"
              : "https://gifdb.com/images/high/cute-happy-excited-running-bear-22ddmgfv5pxaoj3t.webp"
          }
          alt={isYesClicked ? "bears kissing" : "bears"}
        />
      </div>

      <div>My dearest LawLaw</div>
      <p>{isYesClicked ? "Yayyyyy, I Love Youuu" : "Will you be my val?"}</p>
    </>
  );
}

export default Header;
