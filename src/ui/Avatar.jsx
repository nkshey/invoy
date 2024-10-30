function Avatar() {
  return (
    <a
      href="https://github.com/nkshey"
      target="_blank"
      className="after:bg-transparent relative rounded-full bg-soft-violet after:absolute after:inset-0 after:rounded-full after:transition-all after:duration-200 hover:after:bg-black-blue/50"
    >
      <img
        src="/images/profile-picture.png"
        alt="profile picture"
        className="h-8 w-8 rounded-full lg:h-10 lg:w-10"
      />
    </a>
  );
}

export default Avatar;
