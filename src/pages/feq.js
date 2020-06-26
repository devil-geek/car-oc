import React from 'react';
import Layout from '../components/layout';
import { array } from 'prop-types';

const Feq = () => {
  return (
    <Layout>
      <section className="feq">
        <div className="feq-content">
          <h3>JavaScript questions</h3>
          <p className="q">
            What is the difference between const, let and var?
          </p>
          <div className="r">
            <p>
              <strong>var</strong>: is global, its function scoped and its
              hoisted.
            </p>
            <p>
              <strong>const</strong>: you can’t reassign it to a new value, its
              block scoped and its not hoisted
            </p>
            <p>
              <strong>let</strong>: can be re-assigned, its block scoped and its
              not hoisted
            </p>
          </div>
          <p className="q">Explain prototypical inheritance</p>
          <div className="r">
            <p>
              Everything in JavaScript has a prototype, it has a base object
              that inherits from. And when you create a new object based on
              another object, you can either inherit all those properties, which
              you will be default or you can overwrite them with your own
            </p>
          </div>
          <p className="q">What does "this" mean in JavaScript?</p>
          <div className="r">
            <p>
              <strong>this</strong> keyword refers to the object it belongs to.
            </p>
            <br />

            <div>
              <p>It has different values depending on where it is used: </p>
              <br />
              <p>
                <strong>In a method</strong>, this refers to the owner object.{' '}
              </p>
              <p>
                <strong>Alone</strong>, this refers to the global object.{' '}
              </p>
              <p>
                <strong>In a function</strong>, this refers to the global
                object.
              </p>
              <p>
                <strong>In a function</strong>, in strict mode, this is
                undefined.
              </p>
              <p>
                <strong>In an event</strong>, this refers to the element that
                received the event.
              </p>
              <p>
                Methods like call(), and apply() can refer this to any object.
              </p>
            </div>
          </div>
          <p className="q">What is the data structure of the DOM?</p>
          <div className="r">
            <p>Its a tree</p>
          </div>
          <p className="q">
            What is a Stack? What is a Queue? How would you create those data
            structures in JavaScript?
          </p>
          <div className="r">
            <p>
              <strong>Stack</strong> is a data structure, with two main
              operations push and pop, by the order in which elements come off,
              its called LIFO (last in, first out)
            </p>
            <p>
              <strong>Queue</strong> is a data structure, by the order in which
              elements come off, its called FIFO (first in, first out)
            </p>
            <p>You can implement them using arrays in JavaScript</p>
          </div>
          <p className="q">
            How can you tell if an image element is loaded on a page?
          </p>
          <div className="r">
            <p>Listening his onload event</p>
          </div>
          <p className="q">What are call() and apply()</p>
          <div className="r">
            <p>Ways to change the scope of the calling function</p>
            <p>
              <strong>call</strong> method takes arguments separately{' '}
              <strong>apply</strong> method takes arguments as an array.
            </p>
          </div>
          <p className="q">What is event delegation?</p>
          <div className="r">
            <p>
              If you have event handlers in HTML you could apply an event
              handler to every single element you wanna have or using event
              delegation just have one event listener at the top, and when you
              click on something it just bubbles up to the parent thet handles
              the event.
            </p>
            <p>
              Event listeners are expensive, so it`s better have one event
              handler versus 60 for perfomance reasons.
            </p>
          </div>
          <p className="q">What is a Worker? When would you use one?</p>
          <div className="r">
            <p>
              A worker is something you would use in a browser to offload
              conputationally expensive work, to not block the UI, cuz there is
              only one single thread in JavaScript
            </p>
            <p>
              Event listeners are expensive, so it`s better have one event
              handler versus 60 for perfomance reasons.
            </p>
          </div>
          <p className="q">What is Big-O?</p>
          <div className="r">
            <p>
              Its the longest amount any function is going to take, given the
              worst case scenario of input
            </p>
            <p>
              <strong>Big Omega</strong> - "best case scenario"
            </p>
            <p>
              <strong>Big Theta</strong> - "average case scenario"
            </p>
            <p>
              <strong>Big O</strong> - "worst case scenario"
            </p>
          </div>
          <br />
          <h3>React questions</h3>
          <p className="q">How React works? How Virtual-DOM works in React?</p>
          <div className="r">
            <p>
              React creates a virtual DOM. When state changes in a component it
              firstly runs a “diffing” algorithm, which identifies what has
              changed in the virtual DOM. The second step is reconciliation,
              where it updates the DOM with the results of diff. The HTML DOM is
              always tree-structured — which is allowed by the structure of HTML
              document. The DOM trees are huge nowadays because of large apps.
              Since we are more and more pushed towards dynamic web apps (Single
              Page Applications — SPAs), we need to modify the DOM tree
              incessantly and a lot. And this is a real performance and
              development pain. The Virtual DOM is an abstraction of the HTML
              DOM. It is lightweight and detached from the browser-specific
              implementation details. It is not invented by React but it uses it
              and provides it for free. ReactElements lives in the virtual DOM.
              They make the basic nodes here. Once we defined the elements,
              ReactElements can be render into the "real" DOM. Whenever a
              ReactComponent is changing the state, diff algorithm in React runs
              and identifies what has changed. And then it updates the DOM with
              the results of diff. The point is - it’s done faster than it would
              be in the regular DOM.
            </p>
          </div>
          <p className="q">Differentiate between Real DOM and Virtual DOM.</p>
          <div className="r">
            <table border="1">
              <tbody>
                <tr>
                  <th>
                    <span>
                      <strong>Real DOM</strong>
                    </span>
                  </th>
                  <th>
                    <span>
                      <strong>Virtual &nbsp;DOM</strong>
                    </span>
                  </th>
                </tr>
                <tr>
                  <td>
                    <span>1. It updates slow.</span>
                  </td>
                  <td>
                    <span>1. It updates faster.</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>2. Can directly update HTML.</span>
                  </td>
                  <td>
                    <span>2. Can’t directly update HTML.</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>3. Creates a new DOM if element updates.</span>
                  </td>
                  <td>
                    <span>3. Updates the JSX if element updates.</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>4. DOM manipulation is very expensive.</span>
                  </td>
                  <td>
                    <span>4. DOM manipulation is very easy.</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>5. Too much of memory wastage.</span>
                  </td>
                  <td>
                    <span>5. No memory wastage.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="q">What is JSX?</p>
          <div className="r">
            <p>
              JSX is a shorthand for JavaScript XML. This is a type of file used
              by React which utilizes the expressiveness of JavaScript along
              with HTML like template syntax. This makes the HTML file really
              easy to understand.
            </p>
          </div>
          <p className="q">
            What do you understand by Virtual DOM? Explain its working.
          </p>
          <div className="r">
            <p>
              A virtual DOM is a lightweight JavaScript object which originally
              is just the copy of the real DOM. It is a node tree that lists the
              elements, their attributes and content as Objects and their
              properties. React’s render function creates a node tree out of the
              React components. It then updates this tree in response to the
              mutations in the data model which is caused by various actions
              done by the user or by the system. This Virtual DOM works in three
              simple steps.
              <ol>
                <li>
                  Whenever any underlying data changes, the entire UI is
                  re-rendered in Virtual DOM representation
                </li>
                <li>
                  Then the difference between the previous DOM representation
                  and the new one is calculated.
                </li>
                <li>
                  Once the calculations are done, the real DOM will be updated
                  with only the things that have actually changed.
                </li>
              </ol>
            </p>
          </div>
          <p className="q">What is Props?</p>
          <div className="r">
            <p>
              Props is the shorthand for Properties in React. They are read-only
              components which must be kept pure i.e. immutable. They are always
              passed down from the parent to the child components throughout the
              application. A child component can never send a prop back to the
              parent component. This help in maintaining the unidirectional data
              flow and are generally used to render the dynamically generated
              data.
            </p>
          </div>
          <p className="q">What is a state in React and how is it used?</p>
          <div className="r">
            <p>
              States are the heart of React components. States are the source of
              data and must be kept as simple as possible. Basically, states are
              the objects which determine components rendering and behavior.
              They are mutable unlike the props and create dynamic and
              interactive components. They are accessed via this.state().
            </p>
          </div>
          <p className="q">What do you understand by refs in React?</p>
          <div className="r">
            <p>
              Refs is the short hand for References in React. It is an attribute
              which helps to store a reference to a particular React element or
              component, which will be returned by the components render
              configuration function. It is used to return references to a
              particular element or component returned by render(). They come in
              handy when we need DOM measurements or to add methods to the
              components.
            </p>
          </div>
          <p className="q">What are Higher Order Components(HOC)?</p>
          <div className="r">
            <p>
              Higher Order Component is an advanced way of reusing the component
              logic. Basically, it’s a pattern that is derived from React’s
              compositional nature. HOC are custom components which wrap another
              component within it. They can accept any dynamically provided
              child component but they won’t modify or copy any behavior from
              their input components. You can say that HOC are ‘pure’
              components.
            </p>
          </div>
          <p className="q"> What is the significance of keys in React?</p>
          <div className="r">
            <p>
              Keys are used for identifying unique Virtual DOM Elements with
              their corresponding data driving the UI. They help React to
              optimize the rendering by recycling all the existing elements in
              the DOM. These keys must be a unique number or string, using which
              React just reorders the elements instead of re-rendering them.
              This leads to increase in application’s performance.
            </p>
          </div>
          <br />
          <h3>Redux questions</h3>
          <p className="q">What is Redux?</p>
          <div className="r">
            <p>
              Redux is one of the hottest libraries for front-end development in
              today’s marketplace. It is a predictable state container for
              JavaScript applications and is used for the entire applications
              state management. Applications developed with Redux are easy to
              test and can run in different environments showing consistent
              behavior.
            </p>
          </div>
          <p className="q">What are the three principles that Redux follows?</p>
          <div className="r">
            <p>
              <strong>Single source of truth</strong>: The state of the entire
              application is stored in an object/ state tree within a single
              store. The single state tree makes it easier to keep track of
              changes over time and debug or inspect the application.{' '}
            </p>
            <p>
              <strong>State is read-only</strong>: The only way to change the
              state is to trigger an action. An action is a plain JS object
              describing the change. Just like state is the minimal
              representation of data, the action is the minimal representation
              of the change to that data.
            </p>
            <p>
              <strong>Changes are made with pure functions</strong>: In order to
              specify how the state tree is transformed by actions, you need
              pure functions. Pure functions are those whose return value
              depends solely on the values of their arguments.
            </p>
          </div>
          <p className="q">What are the components of Redux?</p>
          <div className="r">
            <p>
              <strong>Action</strong> – It’s an object that describes what
              happened.
            </p>
            <p>
              <strong>Reducer</strong> – It is a place to determine how the
              state will change.
            </p>
            <p>
              <strong>Store</strong> – State/Object tree of the entire
              application is saved in the Store.
            </p>
          </div>
          <br />
          <br />
          <h4>Sources</h4>
          <br />
          <a href="https://frontendmasters.com/books/front-end-handbook/2019/#3.8">
            <p>Front end handbook 2019</p>
          </a>
          <a href="https://github.com/yangshun/front-end-interview-handbook">
            <p>Front End Interview Handbook</p>
          </a>
          <a href="https://yangshun.github.io/tech-interview-handbook/">
            <p>Tech Interview Handbook</p>
          </a>
          <a href="https://medium.com/@vigowebs/frequently-asked-react-js-interview-questions-and-answers-36f3dd99f486">
            <p>Frequently asked: React JS Interview Questions and Answers</p>
          </a>
          <a href="https://www.edureka.co/blog/interview-questions/react-interview-questions/">
            <p>React Interview Questions</p>
          </a>
          <a href="https://blog.courseinn.com/front-end-developer-interview-questions-answers/">
            <p>Front End Developer Interview Questions</p>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Feq;
