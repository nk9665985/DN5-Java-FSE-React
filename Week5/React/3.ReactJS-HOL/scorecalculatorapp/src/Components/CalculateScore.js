import '../Stylesheets/mystyle.css';

function CalculateScore() {

    const Name = "Steeve";
    const School = "DNV Public School";
    const total = 284;
    const goal = 3;

    const average = total / goal;

    return (
        <div>
            <h1>Student Details:</h1>

            <table>
                <tbody>
                <tr>
                    <td><b>Name:</b></td>
                    <td>{Name}</td>
                </tr>

                <tr>
                    <td><b>School:</b></td>
                    <td>{School}</td>
                </tr>

                <tr>
                    <td><b>Total:</b></td>
                    <td>{total}</td>
                </tr>

                <tr>
                    <td><b>Goal Subjects:</b></td>
                    <td>{goal}</td>
                </tr>

                <tr>
                    <td><b>Average:</b></td>
                    <td>{average}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CalculateScore;