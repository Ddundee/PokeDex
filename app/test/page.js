export default async function Page() {


    return (
        <div className="flex flex-wrap justify-start">
            <p>You clicked the button {state} times.</p>
            <button onClick={() => setState(state + 1)}>Click Me!</button>
        </div>
    )
}