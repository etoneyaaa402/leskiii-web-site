
export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col md:flex-row gap-6 justify-center m-6">
        <ul className="flex flex-row gap-6 justify-center">
          <li><a href="mailto:lisionok402@yandex.ru">email</a></li>
          <li><a href="https://t.me/lesskiii"> telegram</a></li>
          <li><a href="tel:+375333777332"> phone</a></li>
        </ul>
        <p className="text-center"><a href="/files/cv.pdf" download className="transition-colors hover:text-blue-500">download my resume</a></p>
      </footer>
    </div>
  );
}