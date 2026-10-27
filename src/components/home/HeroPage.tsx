import Button from "../blocks/Button";
import CopyableText from "../blocks/CopyableText";

export default function HeroPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center m-6 mb-10">
        <p className="text-5xl leading-none tracking-tight md:text-7xl lg:text-9xl">volgina <br /> olesya</p>
        <img src="/images/me-2.webp" alt="avatar-photo" className="w-100 h-auto"/>
        <div className="text-1xl md:text-2xl lg:text-4xl">
          <p>**21 y.o.    __   04/02/2005</p>
          <p>**Minsk    --    Belarus</p>
          <p>
            <CopyableText href="mailto:lisionok402@yandex.ru" value="lisionok402@yandex.ru">
              **lisionok402@yandex.ru
            </CopyableText>
          </p>
          <p>
            <CopyableText href="tel:+375333777332" value="+375333777332">
              **+375(33)377-73-32
            </CopyableText>
          </p>
          <p><a href="#">**tg   __     @lesskiii</a></p>
          <div className="flex flex-row justify-between p-0 mt-2">
            <p><a href="#" className="hover:text-blue-500 hover:underline">GitHub</a></p>
            <p><a href="#" className="hover:text-blue-500 hover:underline">LinkeIn</a></p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3 md:gap-6 m-6 justify-center md:justify-start">
        <Button text="check my cases" href="/cases" variant="primary" />
        <Button text="experience" href="/experience" variant="secondary"/>
      </div>
    </div>
  );
}