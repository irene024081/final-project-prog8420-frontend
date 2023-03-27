import Layout from '../../Layout/Layout';
import React from 'react';
import Table from '../../Components/Table';
import { Link } from 'react-router-dom';

function WatchList(props) {
  return (
    <Layout>
      <div className="flex flex-col gap-6 my-10 mx-10">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">My List</h2>
          <Link to="/to-watch">
            <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
              Back
            </button>
          </Link>
        </div>

        <Table data={props.Movies} admin={false} />
      </div>
    </Layout>
  );
}

export default WatchList;
