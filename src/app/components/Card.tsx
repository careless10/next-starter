'use client'

type Props = {
    title:string;
    description:string
}

export default function Card(props:Props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis nam nesciunt in eaque magni facere nulla nemo id quo veritatis vero, unde eos at sed sapiente ex quibusdam iusto?</p>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
            </ul>
        </div>
    )
}

export function MiniCard(){
    return (
        <div>
            <h3>Mini Card</h3>
        </div>
    )
}

export function MicroCard(){
    return (
        <div>
            <h3>Micro Card</h3>
        </div>
    )
}