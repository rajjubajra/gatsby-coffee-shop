import React from 'react';
import {Link} from 'gatsby';
import Title from '../Globals/Title';

export default function info() {
  return (
    <section>
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt cum neque ullam minima itaque dolor animi quas nam molestiae sequi laudantium iure doloribus suscipit enim nostrum mollitia commodi, vel distinctio veritatis. Nobis consequuntur culpa voluptatum porro expedita libero alias est a, quaerat adipisci laborum necessitatibus eos deleniti assumenda repellendus.
            </p>
            <Link to="/about/">
            <button className="btn text-uppercase btn-yellow">About page</button></Link>

          </div>
        </div>
      </div>

    </section>
  )
}
