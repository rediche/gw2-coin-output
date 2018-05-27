import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { DomIf } from "@polymer/polymer/lib/elements/dom-if.js";
import "@polymer/iron-icon/iron-icon.js";

/**
  `gw2-coin-output` converts a coin string to gold, silver and copper values appended by the corresponding icon from Guild Wars 2.

  @element gw2-coin-output
  @demo demo/index.html 
*/
class GW2CoinOutput extends PolymerElement {
  /**
   * Returns the name of the component.
   * @returns {string}
   */
  static get is() {
    return "gw2-coin-output";
  }

  /* Make sure we can use importPath */
  static get importMeta() { return import.meta; }

  /**
   * Returns the template of the component.
   * @returns {html}
   */
  static get template() {
    return html`
    <style>
      :host {
        display: inline;
      }

      .coin {
        --iron-icon-height: var(--gw2-coin-output-height, 15px);
        --iron-icon-width: var(--gw2-coin-output-width, 15px);
        margin-right: 4px;
      }
    </style>
    
    <template is="dom-if" if="{{ _valueIsNegative(negative) }}">
      <span>-</span>
    </template>

    <template is="dom-if" if="{{ _isHigherThanZero(gold) }}">
      <span>[[ gold ]] <iron-icon src="[[importPath]]images/gold-coin.png" class="coin"></iron-icon> </span>
    </template>

    <template is="dom-if" if="{{ _isHigherThanZeroAndNotPrepend(silver) }}">
      <span>[[ _prependZero(silver) ]] <iron-icon src="[[importPath]]images/silver-coin.png" class="coin"></iron-icon> </span>
    </template>

    <tempalte is="dom-if" if="{{ _isHigherThanZeroAndNotPrepend(copper) }}">
      <span>[[ _prependZero(copper) ]] <iron-icon src="[[importPath]]images/copper-coin.png" class="coin"></iron-icon> </span>
    </tempalte>
    `;
  }

  static get properties() {
    return {
      gold: {
        type: Number,
        value: 0
      },
      silver: {
        type: Number,
        value: 0
      },
      copper: {
        type: Number,
        value: 0
      },
      /* TODO: Make negative a computed value based on coinString */
      negative: {
        type: Boolean,
        value: false
      },
      /* TODO: Breaking change: Make coinString be renamed to value */
      coinString: {
        type: Number,
        reflectToAttribute: true,
        observer: "_formatToCoins"
      },
      prependZeroes: {
        type: Boolean,
        value: false
      }
    };
  }

  /* TODO: Make more like functional programming */
  _formatToCoins() {
    var tempCoinString,
      tempGold = 0,
      tempSilver = 0,
      tempCopper = 0;

    if (this.coinString < 0) {
      tempCoinString = -this.coinString;
      this.set("negative", true);
    } else {
      tempCoinString = this.coinString;
      this.set("negative", false);
    }

    tempGold = Math.floor(tempCoinString / 10000);
    if (tempGold >= 0) {
      this.set("gold", tempGold);
    }

    tempSilver = Math.floor(tempCoinString / 100) % 100;
    if (tempSilver >= 0) {
      this.set("silver", tempSilver);
    }

    tempCopper = Math.floor(tempCoinString % 100);
    if (tempCopper >= 0) {
      this.set("copper", tempCopper);
    }

    if (this.gold == 10000) {
      this.set("silver", tempSilver);
      this.set("copper", tempCopper);
    }
  }

  /** @returns {boolean} */
  _valueIsNegative(bool) {
    return bool;
  }

  /** @returns {boolean} */
  _isHigherThanZeroAndNotPrepend(value) {
    if (this.prependZeroes) return true;

    return this._isHigherThanZero(value);
  }

  /* TODO: This doesn't check for higher than zero, but just different than zero */
  /** @returns {boolean} */
  _isHigherThanZero(value) {
    if (value != 0) {
      return true;
    }

    return false;
  }

  _prependZero(value) {
    if (!this.prependZeroes) return value;

    if (value == 0) {
      return "00";
    } else if (value < 10) {
      return `0${value}`;
    } else {
      return value;
    }
  }
}

window.customElements.define(GW2CoinOutput.is, GW2CoinOutput);
