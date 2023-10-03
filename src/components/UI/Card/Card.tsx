import  {FC} from 'react';

interface PROPS {
    title: string,
    description: string,
    img: string, 
    link: string, 
    speed:string
}

const Card: FC<{ case: PROPS }> = ({case:{title , description , img , link , speed}}) => {
    return (
        <div className='card'>
           <h2>card</h2>
        </div>
    );
};

export default Card;


