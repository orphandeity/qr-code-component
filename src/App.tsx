import qrcode from './assets/image-qr-code.png';

function App() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex max-w-[325px] flex-col gap-4 rounded-3xl bg-white p-4 shadow-lg">
        <img src={qrcode} alt="qr code" className="rounded-xl" />
        <div className="flex flex-col gap-4 p-3">
          <h1 className="text-center text-2xl font-bold leading-9 text-dark_blue">
            Improve your front-end skills by building projects
          </h1>

          <p className="text-center leading-7 text-grayish_blue/90">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}

const Attribution = () => {
  return (
    <div className="attribution">
      <p>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        .
      </p>
      <p>
        Coded by <a href="#">Jeff R Williams</a>.
      </p>
    </div>
  );
};

export default App;
