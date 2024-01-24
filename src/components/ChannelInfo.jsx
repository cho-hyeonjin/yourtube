export default function ChannelInfo({ id, name, title }) {
  return (
    <div className="flex my-4 mb-8 items-center">
      <div>{id}</div>
      <div>{name}</div>
      <div>{title}</div>
    </div>
  );
}
