export default function Mpu4xTemplate(props) {
  const { name, slug } = props.props;

  return (
    <div className="page">
      <header>{name}</header>
      <div className="main">
        <div className="mpu-block">
          <iframe
            className="iframe-300x250"
            src={'./iframes/' + slug + '/300x250_1'}
            title={name + ' 300x250'}
          />{' '}
        </div>
        <div className="mpu-block">
          <iframe
            className="iframe-300x250"
            src={'./iframes/' + slug + '/300x250_2'}
            title={name + ' 300x250'}
          />{' '}
        </div>
        <div className="mpu-block">
          <iframe
            className="iframe-300x250"
            src={'./iframes/' + slug + '/300x250_3'}
            title={name + ' 300x250'}
          />{' '}
        </div>
        <div className="mpu-block">
          <iframe
            className="iframe-300x250"
            src={'./iframes/' + slug + '/300x250_4'}
            title={name + ' 300x250'}
          />{' '}
        </div>
        <div className="mpu-block">
          <iframe
            className="iframe-300x250"
            src={'./iframes/' + slug + '/300x250_5'}
            title={name + ' 300x250'}
          />{' '}
        </div>
        <div className="mpu-block">
          <iframe
            className="iframe-300x250"
            src={'./iframes/' + slug + '/300x250_6'}
            title={name + ' 300x250'}
          />{' '}
        </div>
        <div className="mpu-block">
          <iframe
            className="iframe-300x250"
            src={'./iframes/' + slug + '/300x250_7'}
            title={name + ' 300x250'}
          />{' '}
        </div>
        <div className="mpu-block">
          <iframe
            className="iframe-300x250"
            src={'./iframes/' + slug + '/300x250_8'}
            title={name + ' 300x250'}
          />
        </div>
      </div>
    </div>
  );
}
