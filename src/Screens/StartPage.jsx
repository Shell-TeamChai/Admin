import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import RatingStars from '../Components/RatingStars';

// const Feed = [
//     { id: 1, topic: 'Item 1', description: 'Description for Item 1' },
//     { id: 2, topic: 'Item 2', description: 'Description for Item 2' },
//     { id: 3, topic: 'Item 3', description: 'Description for Item 3' },
//     { id: 4, topic: 'Item 4', description: 'Description for Item 4' },
// ];
// const Issues = [
//     { id: 1, topic: 'Item 1', description: 'Description for Item 1' },
//     { id: 2, topic: 'Item 2', description: 'Description for Item 2' },
//     { id: 3, topic: 'Item 3', description: 'Description for Item 3' },
//     { id: 4, topic: 'Item 4', description: 'Description for Item 4' },
// ];


const StartPage = () => {
    const [showFeed, setShowFeed] = useState(0);
    const [showIssues, setShowIssues] = useState(0);

    const [Feed, setFeed] = useState([]);
    const [Issues, setIssues] = useState([]);

    const deleted = [];

    useEffect(() => {
        fetchData();
        fetchIssues();
    }, []);

    const fetchData = async () => {
        try {
            const feed = await fetch('http://localhost:5128/api/Feedbacks'); // Replace with your API endpoint
            const jsonData = await feed.json();

            console.log(jsonData)
            setFeed(jsonData);

            // setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            // setLoading(false);
        }
    };

    const fetchIssues = async () => {
        try {
            const response = await fetch('http://localhost:5128/api/Grievance'); // Replace with your API endpoint
            const jsonData = await response.json();
            console.log(jsonData)
            setIssues(jsonData);
            // setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            // setLoading(false);
        }
    };

    const handleDelete = (id) => {
        // Simulate deleting the item from the data array
        const updatedData = Feed.filter((item) => item.feedbackId !== id);
        setFeed(updatedData);
    };

    const handleResolveClick = (id) => {
        // Find the item with the matching ID and toggle its resolved state
        const updatedItems = Feed.map((item) =>
            item.feedbackId === id ? { ...item, resolved: !item.resolved } : item
        );
        setFeed(updatedItems);
    };
    const handleDeleteIssue = (id) => {
        // Simulate deleting the item from the data array
        const updatedData = Issues.filter((item) => item.grievanceId !== id);
        setIssues(updatedData);
    };

    const handleResolveClickIssue = (id) => {
        // Find the item with the matching ID and toggle its resolved state
        const updatedItems = Issues.map((item) =>
            item.grievanceId === id ? { ...item, resolved: !item.resolved } : item
        );
        setIssues(updatedItems);
    };

    return (
        <div>
            <Navbar />



            <br /><br />
            <div className="w3-row">

                <div id="accordion" className='w3-padding w3-col l6'>
                    <h1>Feedback</h1>
                    {Feed.map((item, idx) => (

                        <div key={idx} class="card">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button onClick={() => setShowFeed(item.feedbackId)} class="btn btn-link" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                                        <RatingStars rating={item.rating} />
                                    </button>
                                </h5>
                            </div>

                            <div id="collapseOne" class={showFeed !== item.feedbackId ? 'collapse' : 'show'} aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    {item.description} <br />
                                    <p className="w3-row w3-right">-{item.user.fname} {item.user.lname}</p>
                                </div>
                                {/* <div className="w3-row w3-right"> */}
                                {/* </div> */}
                                <div className="modal-footer">
                                    <button onClick={() => handleDelete(item.feedbackId)} type="button" className="btn btn-secondary" data-dismiss="modal">Delete</button>
                                    <button
                                        type="button"
                                        className={`btn ${item.resolved ? 'btn-success' : 'btn-primary'}`}
                                        onClick={() => handleResolveClick(item.feedbackId)}
                                    >
                                        {item.resolved ? 'Resolved' : 'Resolve'}
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>




                <div id="accordion" className='w3-padding w3-col l6'>
                    <h1>Issues</h1>
                    {Issues.map((item, idx) => (
                        <div key={idx} class="card">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button onClick={() => setShowIssues(item.grievanceId)} class="btn btn-link" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                                        {item.status}
                                    </button>
                                </h5>
                            </div>

                            <div id="collapseOne" class={showIssues !== item.grievanceId ? 'collapse' : 'show'} aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    {item.description}
                                </div>
                                <div className="modal-footer">
                                    <button onClick={() => handleDeleteIssue(item.grievanceId)} type="button" className="btn btn-secondary" data-dismiss="modal">Delete</button>
                                    <button
                                        type="button"
                                        className={`btn ${item.resolved ? 'btn-success' : 'btn-primary'}`}
                                        onClick={() => handleResolveClickIssue(item.grievanceId)}
                                    >
                                        {item.resolved ? 'Resolved' : 'Resolve'}
                                    </button>
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