import { Component, getAssetPath, h } from '@stencil/core';

@Component({ tag: 'task-three' })
export class TaskThree {
  render() {
    return (
      <div id="task-3" class="task container" data-task-number={2}>
        <header class="d-flex justify-content-between task-header">
          <h1 class="task-title">Задание №3</h1>

          <div
            class="alert alert-success d-none"
            id="task-3-correct"
            role="alert"
          >
            ✓ Выполнено верно
          </div>

          <div class="alert alert-danger d-none" id="task-3-wrong" role="alert">
            ✕ Выполнено неверно
          </div>
        </header>

        <div class="task-text">
          <p>Подпишите элементы внутреннего строения зоны всасывания.</p>
        </div>

        <div class="container">
          <div
            class="d-flex mx-auto position-relative"
            style={{ width: '900px' }}
          >
            <div
              class="w-50"
              style={{ textAlign: 'right', position: 'relative' }}
            >
              <img
                style={{ marginRight: '135px' }}
                src={getAssetPath('./assets/task-3.png')}
                alt="Illustration"
              />

              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  bottom: '0',
                  left: '0',
                  right: '10px'
                }}
              >
                {/* <!-- стрелка 1 --> */}
                <svg
                  version="1.1"
                  width="135"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: 'absolute',
                    top: '64px',
                    right: '0'
                  }}
                >
                  <line
                    x1="0"
                    y1="6"
                    x2="125"
                    y2="6"
                    stroke="black"
                    stroke-width="2"
                  />
                  <polygon
                    points="125 0 125 12 135 6"
                    stroke="black"
                    fill="black"
                    stroke-width="0"
                  />
                </svg>

                {/* <!-- стрелка 2 --> */}
                <svg
                  version="1.1"
                  width="135"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: 'absolute',
                    top: '114px',
                    right: '0'
                  }}
                >
                  <line
                    x1="0"
                    y1="6"
                    x2="125"
                    y2="6"
                    stroke="black"
                    stroke-width="2"
                  />
                  <polygon
                    points="125 0 125 12 135 6"
                    stroke="black"
                    fill="black"
                    stroke-width="0"
                  />
                </svg>

                {/* <!-- стрелка 3 --> */}
                <svg
                  version="1.1"
                  width="135"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: 'absolute',
                    top: '168px',
                    right: '0'
                  }}
                >
                  <line
                    x1="0"
                    y1="6"
                    x2="125"
                    y2="6"
                    stroke="black"
                    stroke-width="2"
                  />
                  <polygon
                    points="125 0 125 12 135 6"
                    stroke="black"
                    fill="black"
                    stroke-width="0"
                  />
                </svg>

                {/* <!-- стрелка 4 --> */}
                <svg
                  version="1.1"
                  width="210"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: 'absolute',
                    top: '218px',
                    right: '0'
                  }}
                >
                  <line
                    x1="0"
                    y1="6"
                    x2="200"
                    y2="6"
                    stroke="black"
                    stroke-width="2"
                  />
                  <polygon
                    points="200 0 200 12 210 6"
                    stroke="black"
                    fill="black"
                    stroke-width="0"
                  />
                </svg>

                {/* <!-- стрелка 5 --> */}
                <svg
                  version="1.1"
                  width="285"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: 'absolute',
                    top: '272px',
                    right: '0'
                  }}
                >
                  <line
                    x1="0"
                    y1="6"
                    x2="275"
                    y2="6"
                    stroke="black"
                    stroke-width="2"
                  />
                  <polygon
                    points="275 0 275 12 285 6"
                    stroke="black"
                    fill="black"
                    stroke-width="0"
                  />
                </svg>

                {/* <!-- стрелка 6 --> */}
                <svg
                  version="1.1"
                  width="205"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: 'absolute',
                    top: '324px',
                    right: '0'
                  }}
                >
                  <line
                    x1="0"
                    y1="6"
                    x2="195"
                    y2="6"
                    stroke="black"
                    stroke-width="2"
                  />
                  <polygon
                    points="195 0 195 12 205 6"
                    stroke="black"
                    fill="black"
                    stroke-width="0"
                  />
                </svg>
              </div>
            </div>

            <form
              class="task-answers w-50"
              id="task-3-answers"
              style={{ marginTop: '50px' }}
            >
              <input
                type="text"
                name="root-hair"
                class="form-control"
                style={{ marginBottom: '14px' }}
              />
              <input
                type="text"
                name="root-peel"
                class="form-control"
                style={{ marginBottom: '14px' }}
              />
              <input
                type="text"
                name="root-bark"
                class="form-control"
                style={{ marginBottom: '14px' }}
              />
              <input
                type="text"
                name="central-cylinder"
                class="form-control"
                style={{ marginBottom: '14px' }}
              />
              <input
                type="text"
                name="wood-vessels"
                class="form-control"
                style={{ marginBottom: '14px' }}
              />
              <input
                type="text"
                name="bast-sieve-tubes"
                class="form-control"
                style={{ marginBottom: '14px' }}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
