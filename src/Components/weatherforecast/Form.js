import React from 'react'

const Form = (props) => {
    return (
        <div>
        <div>
            <div id="background-wrap">
    <div class="x1">
        <div class="cloud"></div>
    </div>

    <div class="x2">
        <div class="cloud"></div>
    </div>

    <div class="x3">
        <div class="cloud"></div>
    </div>

    <div class="x4">
        <div class="cloud"></div>
    </div>

    <div class="x5">
        <div class="cloud"></div>
    </div>
</div>
        </div>
        <div class="container">
  <div class="content">
        <form onSubmit={props.getWeather}>
        
            <input
            type='text'
            placeholder='city'
            name='city'
            /><br/><br/> <br/>
            <input
            type='text'
            placeholder='country'
            name='country'
            /><br/><br/><br/>
            <button>Submit</button>
        </form>
        </div>
        </div>
        </div>
    )
}
export default Form;