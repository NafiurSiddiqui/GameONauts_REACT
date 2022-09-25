function ProgressiveImage({placeholderSrc, src, ...props}){

 return (
 <img 
 {...{src:placeholderSrc, ...props}}
    alt={props.alt || ""}
    className="image"
 />
)
};
 export default ProgressiveImage; 