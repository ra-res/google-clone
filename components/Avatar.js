function Avatar({ url, classAttr }) {
  return (
    <div>
      <img
        loading='lazy'
        className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${classAttr}`}
        src={url}
        alt='profile picture'
      />
    </div>
  );
}

export default Avatar;
