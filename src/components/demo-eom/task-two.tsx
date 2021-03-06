import { Component, getAssetPath, h } from '@stencil/core';

@Component({ tag: 'task-two' })
export class TaskTwo {
  render() {
    return (
      <div id="task-2" class="task container" data-task-number={2}>
        <header class="d-flex justify-content-between task-header">
          <h1 class="task-title">Задание №2</h1>

          <div
            class="alert alert-success d-none"
            id="task-2-correct"
            role="alert"
          >
            ✓ Выполнено верно
          </div>

          <div class="alert alert-danger d-none" id="task-2-wrong" role="alert">
            ✕ Выполнено неверно
          </div>
        </header>

        <div class="task-text">
          <p>Посмотрите на зоны корня и опишите участок зоны всасывания.</p>
        </div>

        <div class="container" style={{ position: 'relative' }}>
          <div class="mx-auto task-image-container">
            <img
              class="img-fluid task-illustration"
              src={getAssetPath('./assets/task-2.png')}
              alt="Illustration"
            />
          </div>

          <form
            id="task-2-answers"
            class="task-answers"
            style={{
              position: 'absolute',
              top: '0',
              left: 'calc(50% - 400px)',
              width: '800px'
            }}
          >
            {/* <!-- участок 1 --> */}
            <input
              name="field-1"
              type="text"
              placeholder="Опишите участок"
              class="form-control"
              style={{
                width: '290px',
                position: 'absolute',
                top: '120px',
                left: '210px'
              }}
            />
            <svg
              version="1.1"
              width="60"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                top: '140px',
                left: '510px'
              }}
            >
              <circle cx="3" cy="3" r="3" fill="black" stroke-width="0" />
              <line
                x1="3"
                y1="3"
                x2="58"
                y2="38"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            {/* <!-- участок 2 --> */}
            <input
              name="field-2"
              type="text"
              placeholder="Опишите участок"
              class="form-control"
              style={{
                width: '290px',
                position: 'absolute',
                top: '214px',
                left: '210px'
              }}
            />
            <svg
              version="1.1"
              width="60"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                top: '224px',
                left: '510px'
              }}
            >
              <circle cx="3" cy="12" r="3" fill="black" stroke-width="0" />
              <line
                x1="3"
                y1="12"
                x2="58"
                y2="2"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            {/* <!-- участок 3 --> */}
            <input
              name="field-3"
              type="text"
              placeholder="Опишите участок"
              class="form-control"
              style={{
                width: '290px',
                position: 'absolute',
                top: '310px',
                left: '210px'
              }}
            />
            <svg
              version="1.1"
              width="60"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                top: '290px',
                left: '510px'
              }}
            >
              <circle cx="3" cy="37" r="3" fill="black" stroke-width="0" />
              <line
                x1="3"
                y1="37"
                x2="58"
                y2="2"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            {/* <!-- участок 4 --> */}
            <input
              name="field-4"
              type="text"
              placeholder="Опишите участок"
              class="form-control"
              style={{
                width: '290px',
                position: 'absolute',
                top: '205px',
                left: '790px'
              }}
            />
            <svg
              version="1.1"
              width="60"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                top: '224px',
                left: '720px'
              }}
            >
              <circle cx="57" cy="3" r="3" fill="black" stroke-width="0" />
              <line
                x1="2"
                y1="13"
                x2="57"
                y2="3"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </form>
        </div>
      </div>
    );
  }
}
