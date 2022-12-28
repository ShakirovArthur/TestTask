export default function Result({goodPairs,badPairs}){
    return(
        <div>
            <p>Правильно расставлены {goodPairs} скобки Неправильно расставлены {badPairs} скобки</p>
        </div>
    )
}