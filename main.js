import { createElement, Component, render } from './toy-react'
class MyComponent extends Component {
    render() {
        return (
            <div>
                <h1>My Component</h1>
                {this.children}
            </div>
        )
    }
}


render(<MyComponent>
    <div>123</div>
    <div>321</div>
</MyComponent>, document.body)