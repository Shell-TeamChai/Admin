import React, { useState } from 'react'
import Navbar from '../Components/Navbar'

const feedback = [
    { id: 1, topic: 'Item 1', description: 'Description for Item 1' },
    { id: 2, topic: 'Item 2', description: 'Description for Item 2' },
    { id: 3, topic: 'Item 3', description: 'Description for Item 3' },
    { id: 4, topic: 'Item 4', description: 'Description for Item 4' },
];
const issues = [
    { id: 1, topic: 'Item 1', description: 'Description for Item 1' },
    { id: 2, topic: 'Item 2', description: 'Description for Item 2' },
    { id: 3, topic: 'Item 3', description: 'Description for Item 3' },
    { id: 4, topic: 'Item 4', description: 'Description for Item 4' },
];


const StartPage = () => {
    const [showFeed, setShowFeed] = useState(0);
    const [showIssues, setShowIssues] = useState(0);
    return (
        <div>
            <Navbar />



            <br /><br />
            <div className="w3-row">

                <div id="accordion" className='w3-padding w3-col l6'>
                    <h1>Feedback</h1>
                    {feedback.map((item, idx) => (
                        <div key={idx} class="card">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button onClick={() => setShowFeed(item.id)} class="btn btn-link" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                                        {item.topic}
                                    </button>
                                </h5>
                            </div>

                            <div id="collapseOne" class={showFeed !== item.id ? 'collapse' : 'show'} aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    {item.description}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Delete</button>
                                    <button type="button" className="btn btn-primary">Update Status</button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>




                <div id="accordion" className='w3-padding w3-col l6'>
                    <h1>Issues</h1>
                    {issues.map((item, idx) => (
                        <div key={idx} class="card">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button onClick={() => setShowIssues(item.id)} class="btn btn-link" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                                        {item.topic}
                                    </button>
                                </h5>
                            </div>

                            <div id="collapseOne" class={showIssues !== item.id ? 'collapse' : 'show'} aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    {item.description}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Delete</button>
                                    <button type="button" className="btn btn-primary">Update Status</button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default StartPage