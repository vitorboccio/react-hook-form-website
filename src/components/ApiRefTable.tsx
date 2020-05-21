import * as React from "react"
import Prism from "prismjs"
import CodeArea from "./CodeArea"
import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import styles from "./ApiRefTable.module.css"

export default function ApiRefTable({
  goToSection,
  api,
  currentLanguage,
}: {
  api: any
  goToSection: Function
  currentLanguage: string
}) {
  const [isStandard, toggleOption] = React.useState(true)

  React.useEffect(() => {
    Prism.highlightAll()
  }, [isStandard])

  return (
    <>
      {api.register.description}

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>
                Input <code>{generic.name[currentLanguage]}</code>
              </th>
              <th>{api.register.example}</th>
            </tr>
            <tr>
              <td>
                <code>name="firstName"</code>
              </td>
              <td>
                <code>{`{ firstName: 'value'}`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>name="firstName[0]"</code>
              </td>
              <td>
                <code>{`{ firstName: [ 'value' ] }`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>name="name.firstName"</code>
              </td>
              <td>
                <code>{`{ name: { firstName: 'value' } }`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>name="name.firstName[0]"</code>
              </td>
              <td>
                <code>{`{ name: { firstName: [ 'value' ] } }`}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {api.register.fieldArray}

      {api.register.options.note(goToSection)}

      <fieldset className={styles.fieldset}>
        <legend>{api.register.options.title}</legend>
        <p>{api.register.selectHelp}</p>
        <label>
          <input
            onChange={() => toggleOption(true)}
            type="radio"
            name="errorMessage"
            defaultChecked
          />
          {api.register.options.registerWithValidation}
        </label>
        <label>
          <input
            onChange={() => toggleOption(false)}
            type="radio"
            name="errorMessage"
          />
          {api.register.options.registerWithValidationMessage}
        </label>
      </fieldset>

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th
                style={{
                  minWidth: isStandard ? 100 : 240,
                }}
              >
                {generic.name[currentLanguage]}
              </th>
              <th
                style={{
                  minWidth: 300,
                }}
              >
                {generic.description[currentLanguage]}
              </th>
              <th
                style={{
                  minWidth: 320,
                }}
              >
                {generic.codeExample[currentLanguage]}
              </th>
            </tr>
            <tr>
              <td>
                <code>ref</code>
                <br />
                <code className={typographyStyles.typeText}>
                  React.RefObject
                </code>
              </td>
              <td>React element ref</td>
              <td>
                <CodeArea
                  withOutCopy
                  style={{ marginTop: -10 }}
                  rawData={`<input
  name="test"
  ref={register}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>required</code>
                <br />
                <code className={typographyStyles.typeText}>
                  {isStandard
                    ? "boolean"
                    : `string |
{
  value: boolean,
  message: string | JSX
}`}
                </code>
              </td>
              <td>{api.register.validation.required}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      ${
        isStandard
          ? "required: true"
          : `required: 'error message' // <p>error message</p>`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>maxLength</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string | JSX
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.maxLength}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      ${
        isStandard
          ? "maxLength: 2"
          : `maxLength : {
        value: 2,
        message: 'error message' // <p>error message</p>
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>minLength</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string | JSX
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.minLength}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      minLength: ${
        isStandard
          ? 1
          : `{
        value: 1,
        message: 'error message' // <p>error message</p>
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>max</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string | JSX
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.max}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      max: ${
        isStandard
          ? 3
          : `{
        value: 3,
        message: 'error message' // <p>error message</p>
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>min</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string | JSX
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.min}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      min: ${
        isStandard
          ? 3
          : `{
        value: 3,
        message: 'error message' // <p>error message</p>
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>pattern</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "RegExp"
                      : `{
  value: RegExp,
  message: string | JSX
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.pattern}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      pattern: ${
        isStandard
          ? "/[A-Za-z]{3}/"
          : `{
        value: /[A-Za-z]{3}/,
        message: 'error message' // <p>error message</p>
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>validate</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    Function | Object
                  </code>
                </code>
              </td>
              <td>{api.register.validation.validate}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`// callback function
<input
  name="test"
  ref={
    register({
      validate: ${
        isStandard
          ? `value => value === '1'`
          : `value => value === '1' || 'error message';  // <p>error message</p>`
      }
    })
  }
/>
// object of callback functions
<input
  name="test1"
  ref={
    register({
      validate: ${
        isStandard
          ? `{
        positive: value => parseInt(value, 10) > 0,
        lessThanTen: value => parseInt(value, 10) < 10
      }`
          : `{
        positive: value => parseInt(value, 10) > 0 || 'should be greater than 0',
        lessThanTen: value => parseInt(value, 10) < 10 || 'should be lower than 10'
      }`
      }
    })
  }
/>
// you can do asynchronous validation as well
<input
  name="test2"
  ref={
    register({
      validate: ${
        isStandard
          ? `async value => await fetch(url)`
          : `async value => await fetch(url) || 'error message';  // <p>error message</p>`
      }
    })
  }
/>
`}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
