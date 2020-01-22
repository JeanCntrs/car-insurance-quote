import React, { useState, Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

const App = () => {

    const [summary, setSummary] = useState({});
    const [loading, setLoading] = useState(false);

    const { totalPlan, data } = summary;

    return (
        <Fragment>
            <Header />
            <div className="container">
                <Form setSummary={setSummary} setLoading={setLoading} />
                {loading ? <Spinner /> : null}
                {!loading && data ? <Summary data={data} /> : null}
                {!loading && totalPlan ? <Result totalPlan={totalPlan} /> : null}
            </div>
        </Fragment>
    );
}

export default App;