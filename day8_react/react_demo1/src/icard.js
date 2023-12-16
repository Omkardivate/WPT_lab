export default function Icard({obj}){

    let name= obj.name
    let age= obj.age
    let hobbies=obj.hobbies
    return (
        <>
        <prev> Hii, i'm <b>{name}</b>. I'm <b>{age} yrs old</b>. I like <b>{hobbies}</b>.</prev>
        </>
    )
}