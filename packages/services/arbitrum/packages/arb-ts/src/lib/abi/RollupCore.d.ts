/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface RollupCoreInterface extends ethers.utils.Interface {
  functions: {
    '_stakerMap(address)': FunctionFragment
    'amountStaked(address)': FunctionFragment
    'currentChallenge(address)': FunctionFragment
    'firstUnresolvedNode()': FunctionFragment
    'getNode(uint256)': FunctionFragment
    'getNodeHash(uint256)': FunctionFragment
    'getStakerAddress(uint256)': FunctionFragment
    'isStaked(address)': FunctionFragment
    'lastStakeBlock()': FunctionFragment
    'latestConfirmed()': FunctionFragment
    'latestNodeCreated()': FunctionFragment
    'latestStakedNode(address)': FunctionFragment
    'stakerCount()': FunctionFragment
    'withdrawableFunds(address)': FunctionFragment
    'zombieAddress(uint256)': FunctionFragment
    'zombieCount()': FunctionFragment
    'zombieLatestStakedNode(uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: '_stakerMap', values: [string]): string
  encodeFunctionData(functionFragment: 'amountStaked', values: [string]): string
  encodeFunctionData(
    functionFragment: 'currentChallenge',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'firstUnresolvedNode',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'getNode',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'getNodeHash',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'getStakerAddress',
    values: [BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'isStaked', values: [string]): string
  encodeFunctionData(
    functionFragment: 'lastStakeBlock',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'latestConfirmed',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'latestNodeCreated',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'latestStakedNode',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'stakerCount',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'withdrawableFunds',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'zombieAddress',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'zombieCount',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'zombieLatestStakedNode',
    values: [BigNumberish]
  ): string

  decodeFunctionResult(functionFragment: '_stakerMap', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'amountStaked',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'currentChallenge',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'firstUnresolvedNode',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'getNode', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNodeHash', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getStakerAddress',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'isStaked', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'lastStakeBlock',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'latestConfirmed',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'latestNodeCreated',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'latestStakedNode',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'stakerCount', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'withdrawableFunds',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'zombieAddress',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'zombieCount', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'zombieLatestStakedNode',
    data: BytesLike
  ): Result

  events: {}
}

export class RollupCore extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: RollupCoreInterface

  functions: {
    _stakerMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, boolean] & {
        index: BigNumber
        latestStakedNode: BigNumber
        amountStaked: BigNumber
        currentChallenge: string
        isStaked: boolean
      }
    >

    '_stakerMap(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, boolean] & {
        index: BigNumber
        latestStakedNode: BigNumber
        amountStaked: BigNumber
        currentChallenge: string
        isStaked: boolean
      }
    >

    amountStaked(
      staker: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    'amountStaked(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    currentChallenge(
      staker: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    'currentChallenge(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    firstUnresolvedNode(overrides?: CallOverrides): Promise<[BigNumber]>

    'firstUnresolvedNode()'(overrides?: CallOverrides): Promise<[BigNumber]>

    getNode(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    'getNode(uint256)'(
      nodeNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    getNodeHash(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    'getNodeHash(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    getStakerAddress(
      stakerNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    'getStakerAddress(uint256)'(
      stakerNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    isStaked(staker: string, overrides?: CallOverrides): Promise<[boolean]>

    'isStaked(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    lastStakeBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    'lastStakeBlock()'(overrides?: CallOverrides): Promise<[BigNumber]>

    latestConfirmed(overrides?: CallOverrides): Promise<[BigNumber]>

    'latestConfirmed()'(overrides?: CallOverrides): Promise<[BigNumber]>

    latestNodeCreated(overrides?: CallOverrides): Promise<[BigNumber]>

    'latestNodeCreated()'(overrides?: CallOverrides): Promise<[BigNumber]>

    latestStakedNode(
      staker: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    'latestStakedNode(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    stakerCount(overrides?: CallOverrides): Promise<[BigNumber]>

    'stakerCount()'(overrides?: CallOverrides): Promise<[BigNumber]>

    withdrawableFunds(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    'withdrawableFunds(address)'(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    zombieAddress(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    'zombieAddress(uint256)'(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    zombieCount(overrides?: CallOverrides): Promise<[BigNumber]>

    'zombieCount()'(overrides?: CallOverrides): Promise<[BigNumber]>

    zombieLatestStakedNode(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    'zombieLatestStakedNode(uint256)'(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>
  }

  _stakerMap(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, boolean] & {
      index: BigNumber
      latestStakedNode: BigNumber
      amountStaked: BigNumber
      currentChallenge: string
      isStaked: boolean
    }
  >

  '_stakerMap(address)'(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, boolean] & {
      index: BigNumber
      latestStakedNode: BigNumber
      amountStaked: BigNumber
      currentChallenge: string
      isStaked: boolean
    }
  >

  amountStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>

  'amountStaked(address)'(
    staker: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  currentChallenge(staker: string, overrides?: CallOverrides): Promise<string>

  'currentChallenge(address)'(
    staker: string,
    overrides?: CallOverrides
  ): Promise<string>

  firstUnresolvedNode(overrides?: CallOverrides): Promise<BigNumber>

  'firstUnresolvedNode()'(overrides?: CallOverrides): Promise<BigNumber>

  getNode(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<string>

  'getNode(uint256)'(
    nodeNum: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  getNodeHash(index: BigNumberish, overrides?: CallOverrides): Promise<string>

  'getNodeHash(uint256)'(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  getStakerAddress(
    stakerNum: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  'getStakerAddress(uint256)'(
    stakerNum: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  isStaked(staker: string, overrides?: CallOverrides): Promise<boolean>

  'isStaked(address)'(
    staker: string,
    overrides?: CallOverrides
  ): Promise<boolean>

  lastStakeBlock(overrides?: CallOverrides): Promise<BigNumber>

  'lastStakeBlock()'(overrides?: CallOverrides): Promise<BigNumber>

  latestConfirmed(overrides?: CallOverrides): Promise<BigNumber>

  'latestConfirmed()'(overrides?: CallOverrides): Promise<BigNumber>

  latestNodeCreated(overrides?: CallOverrides): Promise<BigNumber>

  'latestNodeCreated()'(overrides?: CallOverrides): Promise<BigNumber>

  latestStakedNode(
    staker: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  'latestStakedNode(address)'(
    staker: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  stakerCount(overrides?: CallOverrides): Promise<BigNumber>

  'stakerCount()'(overrides?: CallOverrides): Promise<BigNumber>

  withdrawableFunds(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  'withdrawableFunds(address)'(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  zombieAddress(
    zombieNum: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  'zombieAddress(uint256)'(
    zombieNum: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  zombieCount(overrides?: CallOverrides): Promise<BigNumber>

  'zombieCount()'(overrides?: CallOverrides): Promise<BigNumber>

  zombieLatestStakedNode(
    zombieNum: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  'zombieLatestStakedNode(uint256)'(
    zombieNum: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  callStatic: {
    _stakerMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, boolean] & {
        index: BigNumber
        latestStakedNode: BigNumber
        amountStaked: BigNumber
        currentChallenge: string
        isStaked: boolean
      }
    >

    '_stakerMap(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, boolean] & {
        index: BigNumber
        latestStakedNode: BigNumber
        amountStaked: BigNumber
        currentChallenge: string
        isStaked: boolean
      }
    >

    amountStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>

    'amountStaked(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    currentChallenge(staker: string, overrides?: CallOverrides): Promise<string>

    'currentChallenge(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<string>

    firstUnresolvedNode(overrides?: CallOverrides): Promise<BigNumber>

    'firstUnresolvedNode()'(overrides?: CallOverrides): Promise<BigNumber>

    getNode(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<string>

    'getNode(uint256)'(
      nodeNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    getNodeHash(index: BigNumberish, overrides?: CallOverrides): Promise<string>

    'getNodeHash(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    getStakerAddress(
      stakerNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    'getStakerAddress(uint256)'(
      stakerNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    isStaked(staker: string, overrides?: CallOverrides): Promise<boolean>

    'isStaked(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<boolean>

    lastStakeBlock(overrides?: CallOverrides): Promise<BigNumber>

    'lastStakeBlock()'(overrides?: CallOverrides): Promise<BigNumber>

    latestConfirmed(overrides?: CallOverrides): Promise<BigNumber>

    'latestConfirmed()'(overrides?: CallOverrides): Promise<BigNumber>

    latestNodeCreated(overrides?: CallOverrides): Promise<BigNumber>

    'latestNodeCreated()'(overrides?: CallOverrides): Promise<BigNumber>

    latestStakedNode(
      staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'latestStakedNode(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    stakerCount(overrides?: CallOverrides): Promise<BigNumber>

    'stakerCount()'(overrides?: CallOverrides): Promise<BigNumber>

    withdrawableFunds(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'withdrawableFunds(address)'(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    zombieAddress(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    'zombieAddress(uint256)'(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    zombieCount(overrides?: CallOverrides): Promise<BigNumber>

    'zombieCount()'(overrides?: CallOverrides): Promise<BigNumber>

    zombieLatestStakedNode(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'zombieLatestStakedNode(uint256)'(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    _stakerMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    '_stakerMap(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    amountStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>

    'amountStaked(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    currentChallenge(
      staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'currentChallenge(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    firstUnresolvedNode(overrides?: CallOverrides): Promise<BigNumber>

    'firstUnresolvedNode()'(overrides?: CallOverrides): Promise<BigNumber>

    getNode(
      nodeNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getNode(uint256)'(
      nodeNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getNodeHash(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getNodeHash(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getStakerAddress(
      stakerNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getStakerAddress(uint256)'(
      stakerNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    isStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>

    'isStaked(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    lastStakeBlock(overrides?: CallOverrides): Promise<BigNumber>

    'lastStakeBlock()'(overrides?: CallOverrides): Promise<BigNumber>

    latestConfirmed(overrides?: CallOverrides): Promise<BigNumber>

    'latestConfirmed()'(overrides?: CallOverrides): Promise<BigNumber>

    latestNodeCreated(overrides?: CallOverrides): Promise<BigNumber>

    'latestNodeCreated()'(overrides?: CallOverrides): Promise<BigNumber>

    latestStakedNode(
      staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'latestStakedNode(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    stakerCount(overrides?: CallOverrides): Promise<BigNumber>

    'stakerCount()'(overrides?: CallOverrides): Promise<BigNumber>

    withdrawableFunds(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'withdrawableFunds(address)'(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    zombieAddress(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'zombieAddress(uint256)'(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    zombieCount(overrides?: CallOverrides): Promise<BigNumber>

    'zombieCount()'(overrides?: CallOverrides): Promise<BigNumber>

    zombieLatestStakedNode(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'zombieLatestStakedNode(uint256)'(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    _stakerMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    '_stakerMap(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    amountStaked(
      staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'amountStaked(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    currentChallenge(
      staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'currentChallenge(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    firstUnresolvedNode(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'firstUnresolvedNode()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getNode(
      nodeNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getNode(uint256)'(
      nodeNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getNodeHash(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getNodeHash(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getStakerAddress(
      stakerNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getStakerAddress(uint256)'(
      stakerNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    isStaked(
      staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'isStaked(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    lastStakeBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'lastStakeBlock()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    latestConfirmed(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'latestConfirmed()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    latestNodeCreated(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'latestNodeCreated()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    latestStakedNode(
      staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'latestStakedNode(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    stakerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'stakerCount()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    withdrawableFunds(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'withdrawableFunds(address)'(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    zombieAddress(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'zombieAddress(uint256)'(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    zombieCount(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'zombieCount()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    zombieLatestStakedNode(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'zombieLatestStakedNode(uint256)'(
      zombieNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
