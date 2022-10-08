function TagBtn(props){
 return (
 <button className={`btn-tag ${props.className}`}>{props.children}</button>
)
};
 export default TagBtn; 