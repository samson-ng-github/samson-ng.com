export default function Philadelphia(props) {
  const { name, src } = props.props;

  return (
    <div className="page philadelphia-mobile-container">
      <iframe
        className="iframe-970x250 philadelphia-970x250-1"
        src={src + '/970x250_1'}
        title={name + ' 970x250-1'}
      />
      <iframe
        className="iframe-970x250 philadelphia-970x250-2"
        src={src + '/970x250_2'}
        title={name + ' 970x250-2'}
      />
      <iframe
        className="iframe-970x250 philadelphia-970x250-3"
        src={src + '/970x250_3'}
        title={name + ' 970x250-3'}
      />
    </div>
  );
}
