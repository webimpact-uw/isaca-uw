export default function Container(props) {
    return (
      <div className='max-w-7xl mx-auto p-14'>
        {props.children}
      </div>
    );
}