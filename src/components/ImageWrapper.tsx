interface IImageWrapper {
  src: string;
  alt: string;
}

export function ImageWrapper({src, alt}: IImageWrapper) {
  return (
    <div className="box-border overflow-hidden max-w-full rounded">
      <img className="w-full pb-[75%] rounded" src={src} alt={alt} />
    </div>
  );
}
